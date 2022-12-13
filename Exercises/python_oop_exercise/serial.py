"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        '''This will make the counter at the number you put in'''
        self.start = self.new = start

    def __repr__(self):
        return f"Serial Generator. CurrentStart = {self.start} NextNum = {self.new}"

    def generate(self):
        self.new += 1
        return self.new - 1

    def reset(self):
        self.new = self.start
